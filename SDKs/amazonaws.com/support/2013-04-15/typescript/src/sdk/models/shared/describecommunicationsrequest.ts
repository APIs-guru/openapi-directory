import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCommunicationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=afterTime" })
  afterTime?: string;

  @Metadata({ data: "json, name=beforeTime" })
  beforeTime?: string;

  @Metadata({ data: "json, name=caseId" })
  caseId: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
