import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetIntegrationLinkDetailsPathParams extends SpeakeasyBase {
    integrationLinkType: shared.IntegrationLinkTypeEnum;
    key: string;
}
export declare class GetIntegrationLinkDetailsRequest extends SpeakeasyBase {
    pathParams: GetIntegrationLinkDetailsPathParams;
}
export declare class GetIntegrationLinkDetailsResponse extends SpeakeasyBase {
    contentType: string;
    integrationLinkDetailsModel?: shared.IntegrationLinkDetailsModel;
    statusCode: number;
}
