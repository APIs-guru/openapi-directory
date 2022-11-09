import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCasesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=afterTime" })
  afterTime?: string;

  @Metadata({ data: "json, name=beforeTime" })
  beforeTime?: string;

  @Metadata({ data: "json, name=caseIdList" })
  caseIdList?: string[];

  @Metadata({ data: "json, name=displayId" })
  displayId?: string;

  @Metadata({ data: "json, name=includeCommunications" })
  includeCommunications?: boolean;

  @Metadata({ data: "json, name=includeResolvedCases" })
  includeResolvedCases?: boolean;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
