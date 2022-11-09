import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListQualificationTypesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=MustBeOwnedByCaller" })
  mustBeOwnedByCaller?: boolean;

  @Metadata({ data: "json, name=MustBeRequestable" })
  mustBeRequestable: boolean;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Query" })
  query?: string;
}
