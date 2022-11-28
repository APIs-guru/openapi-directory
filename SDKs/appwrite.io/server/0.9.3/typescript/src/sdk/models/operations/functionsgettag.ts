import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FunctionsGetTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: string;
}


export class FunctionsGetTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsGetTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FunctionsGetTagPathParams;

  @SpeakeasyMetadata()
  security: FunctionsGetTagSecurity;
}


export class FunctionsGetTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tag?: shared.Tag;
}
