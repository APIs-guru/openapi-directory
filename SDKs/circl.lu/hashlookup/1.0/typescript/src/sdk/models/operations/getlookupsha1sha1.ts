import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLookupSha1Sha1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sha1" })
  sha1: string;
}


export class GetLookupSha1Sha1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLookupSha1Sha1PathParams;
}


export class GetLookupSha1Sha1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
