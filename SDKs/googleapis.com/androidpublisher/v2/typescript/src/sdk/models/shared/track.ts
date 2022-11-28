import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Track extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=track" })
  track?: string;

  @SpeakeasyMetadata({ data: "json, name=userFraction" })
  userFraction?: number;

  @SpeakeasyMetadata({ data: "json, name=versionCodes" })
  versionCodes?: number[];
}
