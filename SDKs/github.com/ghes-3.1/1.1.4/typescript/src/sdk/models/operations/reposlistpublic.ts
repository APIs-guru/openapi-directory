import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ReposListPublicVisibilityEnum {
    All = "all",
    Public = "public"
}


export class ReposListPublicQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visibility" })
  visibility?: ReposListPublicVisibilityEnum;
}


export class ReposListPublicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReposListPublicQueryParams;
}


export class ReposListPublicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.MinimalRepository })
  minimalRepositories?: shared.MinimalRepository[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
