import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetOrganizationMembersPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationMembersRequest extends SpeakeasyBase {
    pathParams: GetOrganizationMembersPathParams;
}
export declare class GetOrganizationMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userModels?: shared.UserModel[];
}
