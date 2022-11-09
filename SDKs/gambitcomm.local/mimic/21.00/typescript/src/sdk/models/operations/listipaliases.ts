import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListIpaliasesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ListIpaliasesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListIpaliasesPathParams;
}


export class ListIpaliasesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.IpAlias })
  ipAliases?: shared.IpAlias[];

  @Metadata()
  statusCode: number;
}
