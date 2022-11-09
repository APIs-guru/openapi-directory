import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TrapConfigListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class TrapConfigListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TrapConfigListPathParams;
}


export class TrapConfigListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TrapDest })
  trapDests?: shared.TrapDest[];
}
