import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EcosystemsOnePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;
}


export class EcosystemsOneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EcosystemsOnePathParams;
}


export class EcosystemsOneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getEcosystemResponse?: shared.GetEcosystemResponse;

  @Metadata()
  statusCode: number;
}
