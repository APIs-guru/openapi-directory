import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  siteEntity?: shared.SiteEntity;

  @Metadata()
  statusCode: number;
}
