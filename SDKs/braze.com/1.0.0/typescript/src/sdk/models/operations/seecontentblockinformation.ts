import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SeeContentBlockInformationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=content_block_id" })
  contentBlockId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_inclusion_data" })
  includeInclusionData?: string;
}


export class SeeContentBlockInformationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SeeContentBlockInformationQueryParams;
}


export class SeeContentBlockInformationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
