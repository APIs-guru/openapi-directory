import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FromListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class FromListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FromListPathParams;
}


export class FromListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.IpSource })
  ipSources?: shared.IpSource[];

  @SpeakeasyMetadata()
  statusCode: number;
}
