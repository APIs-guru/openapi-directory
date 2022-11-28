import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddOrUpdateIntegrationLinkPathParams extends SpeakeasyBase {
    environmentId: string;
    integrationLinkType: shared.IntegrationLinkTypeEnum;
    key: string;
    settingId: number;
}
export declare class AddOrUpdateIntegrationLinkRequests extends SpeakeasyBase {
    addOrUpdateIntegrationLinkModel?: shared.AddOrUpdateIntegrationLinkModel;
    addOrUpdateIntegrationLinkModel1?: shared.AddOrUpdateIntegrationLinkModel;
    addOrUpdateIntegrationLinkModel2?: shared.AddOrUpdateIntegrationLinkModel;
}
export declare class AddOrUpdateIntegrationLinkRequest extends SpeakeasyBase {
    pathParams: AddOrUpdateIntegrationLinkPathParams;
    request?: AddOrUpdateIntegrationLinkRequests;
}
export declare class AddOrUpdateIntegrationLinkResponse extends SpeakeasyBase {
    contentType: string;
    integrationLinkModel?: shared.IntegrationLinkModel;
    statusCode: number;
}
