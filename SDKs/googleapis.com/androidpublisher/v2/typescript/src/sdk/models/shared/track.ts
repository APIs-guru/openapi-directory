import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Track extends SpeakeasyBase {
  @Metadata({ data: "json, name=track" })
  track?: string;

  @Metadata({ data: "json, name=userFraction" })
  userFraction?: number;

  @Metadata({ data: "json, name=versionCodes" })
  versionCodes?: number[];
}
