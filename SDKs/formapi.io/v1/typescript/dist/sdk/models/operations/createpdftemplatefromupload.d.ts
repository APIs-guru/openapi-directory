import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum {
    ApplicationPdf = "application/pdf"
}
export declare class CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata extends SpeakeasyBase {
    filename: string;
    mimeType: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum;
    size: number;
}
export declare enum CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum {
    Cache = "cache"
}
export declare class CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument extends SpeakeasyBase {
    id: string;
    metadata: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata;
    storage: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum;
}
export declare enum CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}
export declare enum CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum {
    Pdf = "pdf",
    Html = "html"
}
export declare class CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData extends SpeakeasyBase {
    allowAdditionalProperties?: boolean;
    description?: string;
    document?: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument;
    editableSubmissions?: boolean;
    expirationInterval?: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum;
    expireAfter?: number;
    expireSubmissions?: boolean;
    footerHtml?: string;
    headerHtml?: string;
    html?: string;
    name: string;
    publicSubmissions?: boolean;
    publicWebForm?: boolean;
    redirectUrl?: string;
    scss?: string;
    slackWebhookUrl?: string;
    templateType?: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum;
    webhookUrl?: string;
}
export declare class CreatePdfTemplateFromUploadCreateTemplateFromUploadData extends SpeakeasyBase {
    template: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData;
}
export declare class CreatePdfTemplateFromUploadSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}
export declare class CreatePdfTemplateFromUploadPendingTemplate extends SpeakeasyBase {
    allowAdditionalProperties: boolean;
    description: string;
    editableSubmissions: boolean;
    expirationInterval?: CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum;
    expireAfter?: number;
    expireSubmissions: boolean;
    id: string;
    locked: boolean;
    name: string;
    parentFolderId?: string;
    path?: string;
    publicSubmissions: boolean;
    publicWebForm: boolean;
    redirectUrl: string;
    slackWebhookUrl: string;
    templateType: string;
    webhookUrl: string;
}
export declare class CreatePdfTemplateFromUploadRequest extends SpeakeasyBase {
    request: CreatePdfTemplateFromUploadCreateTemplateFromUploadData;
    security: CreatePdfTemplateFromUploadSecurity;
}
export declare class CreatePdfTemplateFromUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    pendingTemplate?: CreatePdfTemplateFromUploadPendingTemplate;
}
