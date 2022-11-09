import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPairedDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Example111 })
  example111s?: shared.Example111[];

  @Metadata()
  statusCode: number;
}
