import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://workmailmessageflow.{region}.amazonaws.com", "https://workmailmessageflow.{region}.amazonaws.com", "http://workmailmessageflow.{region}.amazonaws.com.cn", "https://workmailmessageflow.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getRawMessageContent - Retrieves the raw content of an in-transit email message, in MIME format.
    **/
    getRawMessageContent(req: operations.GetRawMessageContentRequest, config?: AxiosRequestConfig): Promise<operations.GetRawMessageContentResponse>;
    /**
     * putRawMessageContent - <p>Updates the raw content of an in-transit email message, in MIME format.</p> <p>This example describes how to update in-transit email message. For more information and examples for using this API, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> <note> <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function configured with a synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules"> Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged, even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated message. </p> </note>
    **/
    putRawMessageContent(req: operations.PutRawMessageContentRequest, config?: AxiosRequestConfig): Promise<operations.PutRawMessageContentResponse>;
}
export {};
