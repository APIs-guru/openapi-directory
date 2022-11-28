import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServicepacksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Servicepack })
  servicepacks?: shared.Servicepack[];

  @SpeakeasyMetadata()
  statusCode: number;
}
