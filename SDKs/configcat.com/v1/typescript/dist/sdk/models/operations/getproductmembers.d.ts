import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductMembersPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class GetProductMembersRequest extends SpeakeasyBase {
    pathParams: GetProductMembersPathParams;
}
export declare class GetProductMembersResponse extends SpeakeasyBase {
    contentType: string;
    memberModels?: shared.MemberModel[];
    statusCode: number;
}
