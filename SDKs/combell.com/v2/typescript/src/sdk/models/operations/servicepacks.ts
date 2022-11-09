import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicepacksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Servicepack })
  servicepacks?: shared.Servicepack[];

  @Metadata()
  statusCode: number;
}
