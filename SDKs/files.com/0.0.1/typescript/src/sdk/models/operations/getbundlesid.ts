import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBundlesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetBundlesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBundlesIdPathParams;
}


export class GetBundlesIdResponse extends SpeakeasyBase {
  @Metadata()
  bundleEntity?: shared.BundleEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
