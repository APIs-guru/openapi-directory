import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EmailTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listAvailableEmailTemplates - List Available Email Templates
     *
     * Use this endpoint to get a list of available templates in your Braze account.
     *
     * Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
     *
     * ### Successful Response Properties
     * ```json
     * {
     *   "count": number of templates returned
     *   "templates": [template with the following properties]:
     *     "email_template_id": (string) your email template's API Identifier,
     *     "template_name": (string) the name of your email template,
     *     "created_at": (string, in ISO 8601),
     *     "updated_at": (string, in ISO 8601),
     *     "tags": (array of strings) tags appended to the template
     * }
     *   ```
    **/
    listAvailableEmailTemplates(req: operations.ListAvailableEmailTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailableEmailTemplatesResponse>;
    /**
     * seeEmailTemplateInformation - See Email Template Information
     *
     * Use to get information on your email templates.
     *
     * Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
     *
     * ### Request Components
     * - [Template Identifier](https://www.braze.com/docs/api/identifier_types/)
    **/
    seeEmailTemplateInformation(req: operations.SeeEmailTemplateInformationRequest, config?: AxiosRequestConfig): Promise<operations.SeeEmailTemplateInformationResponse>;
}
