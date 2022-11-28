import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetProductMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductMembersPathParams;
}


export class GetProductMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MemberModel })
  memberModels?: shared.MemberModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
