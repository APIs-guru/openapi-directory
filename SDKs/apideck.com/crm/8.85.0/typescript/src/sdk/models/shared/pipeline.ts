import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";



export class PipelineStagesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_order" })
  displayOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=win_probability" })
  winProbability?: number;
}


export class PipelineStages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_order" })
  displayOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=win_probability" })
  winProbability?: number;
}


export class PipelineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=display_order" })
  displayOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=stages", elemType: PipelineStagesInput })
  stages?: PipelineStagesInput[];
}


export class Pipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=display_order" })
  displayOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=stages", elemType: PipelineStages })
  stages?: PipelineStages[];

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
