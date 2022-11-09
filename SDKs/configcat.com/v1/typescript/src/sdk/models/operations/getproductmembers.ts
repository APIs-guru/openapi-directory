import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetProductMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductMembersPathParams;
}


export class GetProductMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MemberModel })
  memberModels?: shared.MemberModel[];

  @Metadata()
  statusCode: number;
}
