import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MoveTemplateToFolderPathParams extends SpeakeasyBase {
    templateId: string;
}
export declare class MoveTemplateToFolderMoveTemplateData extends SpeakeasyBase {
    parentFolderId: string;
}
export declare class MoveTemplateToFolderSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum MoveTemplateToFolderTemplateExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}
export declare class MoveTemplateToFolderTemplate extends SpeakeasyBase {
    allowAdditionalProperties: boolean;
    description: string;
    documentUrl?: string;
    editableSubmissions: boolean;
    expirationInterval?: MoveTemplateToFolderTemplateExpirationIntervalEnum;
    expireAfter?: number;
    expireSubmissions: boolean;
    id: string;
    locked: boolean;
    name: string;
    pageDimensions?: number[][];
    parentFolderId?: string;
    path?: string;
    permanentDocumentUrl?: string;
    publicSubmissions: boolean;
    publicWebForm: boolean;
    redirectUrl: string;
    slackWebhookUrl: string;
    templateType: string;
    webhookUrl: string;
}
export declare class MoveTemplateToFolderRequest extends SpeakeasyBase {
    pathParams: MoveTemplateToFolderPathParams;
    request: MoveTemplateToFolderMoveTemplateData;
    security: MoveTemplateToFolderSecurity;
}
export declare class MoveTemplateToFolderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    template?: MoveTemplateToFolderTemplate;
}
