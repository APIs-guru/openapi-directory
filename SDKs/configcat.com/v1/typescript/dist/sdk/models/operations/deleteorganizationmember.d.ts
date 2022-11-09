import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteOrganizationMemberPathParams extends SpeakeasyBase {
    organizationId: string;
    userId: string;
}
export declare class DeleteOrganizationMemberRequest extends SpeakeasyBase {
    pathParams: DeleteOrganizationMemberPathParams;
}
export declare class DeleteOrganizationMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
