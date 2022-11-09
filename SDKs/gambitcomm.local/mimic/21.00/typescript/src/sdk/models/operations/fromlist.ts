import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FromListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class FromListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FromListPathParams;
}


export class FromListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.IpSource })
  ipSources?: shared.IpSource[];

  @Metadata()
  statusCode: number;
}
