import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLookupSha1Sha1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sha1" })
  sha1: string;
}


export class GetLookupSha1Sha1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLookupSha1Sha1PathParams;
}


export class GetLookupSha1Sha1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
