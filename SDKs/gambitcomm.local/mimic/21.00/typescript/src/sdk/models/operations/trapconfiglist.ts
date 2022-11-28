import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TrapConfigListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class TrapConfigListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrapConfigListPathParams;
}


export class TrapConfigListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TrapDest })
  trapDests?: shared.TrapDest[];
}
