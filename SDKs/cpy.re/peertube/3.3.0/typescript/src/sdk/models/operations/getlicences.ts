import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLicencesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLicences200ApplicationJsonStrings?: string[];
}
