import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TimezonesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Example14 })
  example14s?: shared.Example14[];

  @Metadata()
  statusCode: number;
}
