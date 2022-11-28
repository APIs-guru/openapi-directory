import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserPhoto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=photoData" })
  photoData?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryEmail" })
  primaryEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
