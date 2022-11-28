import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCustomPagesHomepageInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customHomepage?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
