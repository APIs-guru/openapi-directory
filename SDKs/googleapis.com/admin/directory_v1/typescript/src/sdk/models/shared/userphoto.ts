import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserPhoto extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=photoData" })
  photoData?: string;

  @Metadata({ data: "json, name=primaryEmail" })
  primaryEmail?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
