import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=afterTime" })
  afterTime?: string;

  @SpeakeasyMetadata({ data: "json, name=beforeTime" })
  beforeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=caseIdList" })
  caseIdList?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayId" })
  displayId?: string;

  @SpeakeasyMetadata({ data: "json, name=includeCommunications" })
  includeCommunications?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeResolvedCases" })
  includeResolvedCases?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
