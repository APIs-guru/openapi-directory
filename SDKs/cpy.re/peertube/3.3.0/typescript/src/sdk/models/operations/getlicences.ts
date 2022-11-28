import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLicencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLicences200ApplicationJsonStrings?: string[];
}
