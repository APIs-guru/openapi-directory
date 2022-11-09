import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CurrencyEnum } from "./currencyenum";


export class PipelineStages extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_order" })
  displayOrder?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;

  @Metadata({ data: "json, name=win_probability" })
  winProbability?: number;
}


export class Pipeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=display_order" })
  displayOrder?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=stages", elemType: shared.PipelineStages })
  stages?: PipelineStages[];

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
