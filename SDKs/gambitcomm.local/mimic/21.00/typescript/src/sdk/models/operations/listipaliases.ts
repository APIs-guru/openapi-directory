import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListIpaliasesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ListIpaliasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListIpaliasesPathParams;
}


export class ListIpaliasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.IpAlias })
  ipAliases?: shared.IpAlias[];

  @SpeakeasyMetadata()
  statusCode: number;
}
