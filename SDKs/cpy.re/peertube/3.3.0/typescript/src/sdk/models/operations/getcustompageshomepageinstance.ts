import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCustomPagesHomepageInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customHomepage?: any;

  @Metadata()
  statusCode: number;
}
