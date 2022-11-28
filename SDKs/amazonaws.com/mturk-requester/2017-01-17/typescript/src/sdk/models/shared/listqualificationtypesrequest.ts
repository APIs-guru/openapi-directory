import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListQualificationTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=MustBeOwnedByCaller" })
  mustBeOwnedByCaller?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MustBeRequestable" })
  mustBeRequestable: boolean;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Query" })
  query?: string;
}
