import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EcosystemsOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;
}


export class EcosystemsOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EcosystemsOnePathParams;
}


export class EcosystemsOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getEcosystemResponse?: shared.GetEcosystemResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
