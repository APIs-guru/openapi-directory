import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteProductMemberPathParams extends SpeakeasyBase {
    productId: string;
    userId: string;
}
export declare class DeleteProductMemberRequest extends SpeakeasyBase {
    pathParams: DeleteProductMemberPathParams;
}
export declare class DeleteProductMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
