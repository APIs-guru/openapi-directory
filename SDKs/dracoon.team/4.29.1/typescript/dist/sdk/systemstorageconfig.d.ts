import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SystemStorageConfig {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createS3Config - Create S3 storage configuration
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
     *
     * ### Description:
     * Create new S3 configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * New S3 configuration is created.
     *
     * ### Further Information:
     * Forbidden characters in bucket names: [`.`]
     * `bucketName` and `endpointUrl` are deprecated, use `bucketUrl` instead.
     *
     * ### Virtual hosted style access
     *
     * Example: https://<span style="color:red;">bucket-name</span>.s3.<span style="color:red;">region</span>.amazonaws.com/<span style="color:red;">key-name</span>
     *
    **/
    createS3Config(req: operations.CreateS3ConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateS3ConfigResponse>;
    /**
     * createS3Tag - Create S3 tag
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
     *
     * ### Description:
     * Create new S3 tag.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * New S3 tag is created.
     *
     * ### Further Information:
     * * Maximum key length: **128** characters.
     * * Maximum value length: **256** characters.
     * * Both S3 tag key and value are **case-sensitive** strings.
     * * Maximum of **20 mandatory S3 tags** is allowed.
    **/
    createS3Tag(req: operations.CreateS3TagRequest, config?: AxiosRequestConfig): Promise<operations.CreateS3TagResponse>;
    /**
     * removeS3Tag - Remove S3 tag
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
     *
     * ### Description:
     * Delete S3 tag.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * S3 tag gets deleted.
     *
     * ### Further Information:
     * None.
    **/
    removeS3Tag(req: operations.RemoveS3TagRequest, config?: AxiosRequestConfig): Promise<operations.RemoveS3TagResponse>;
    /**
     * request3Config - Request S3 storage configuration
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
     *
     * ### Description:
     * Retrieve S3 configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * S3 configuration is returned.
     *
     * ### Further Information:
     * None.
     *
     * ### Virtual hosted style access
     *
     * Example: https://<span style="color:red;">bucket-name</span>.s3.<span style="color:red;">region</span>.amazonaws.com/<span style="color:red;">key-name</span>
     *
    **/
    request3Config(req: operations.Request3ConfigRequest, config?: AxiosRequestConfig): Promise<operations.Request3ConfigResponse>;
    /**
     * requestS3Tag - Request S3 tag
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
     *
     * ### Description:
     * Retrieve single S3 tag.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * S3 tag is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestS3Tag(req: operations.RequestS3TagRequest, config?: AxiosRequestConfig): Promise<operations.RequestS3TagResponse>;
    /**
     * requestS3TagList - Request list of configured S3 tags
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
     *
     * ### Description:
     * Retrieve all configured S3 tags.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * S3 tags are returned.
     *
     * ### Further Information:
     * An empty list is returned if no S3 tags are found / configured.
    **/
    requestS3TagList(req: operations.RequestS3TagListRequest, config?: AxiosRequestConfig): Promise<operations.RequestS3TagListResponse>;
    /**
     * updateS3Config - Update S3 storage configuration
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
     *
     * ### Description:
     * Update existing S3 configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * S3 configuration is updated.
     *
     * ### Further Information:
     * Forbidden characters in bucket names: [`.`]
     * `bucketName` and `endpointUrl` are deprecated, use `bucketUrl` instead.
     *
     * ### Virtual hosted style access
     *
     * Example: https://<span style="color:red;">bucket-name</span>.s3.<span style="color:red;">region</span>.amazonaws.com/<span style="color:red;">key-name</span>
     *
    **/
    updateS3Config(req: operations.UpdateS3ConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateS3ConfigResponse>;
}
