import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteIntegrationLinkPathParams extends SpeakeasyBase {
    environmentId: string;
    integrationLinkType: shared.IntegrationLinkTypeEnum;
    key: string;
    settingId: number;
}
export declare class DeleteIntegrationLinkRequest extends SpeakeasyBase {
    pathParams: DeleteIntegrationLinkPathParams;
}
export declare class DeleteIntegrationLinkResponse extends SpeakeasyBase {
    contentType: string;
    deleteIntegrationLinkModel?: shared.DeleteIntegrationLinkModel;
    statusCode: number;
}
