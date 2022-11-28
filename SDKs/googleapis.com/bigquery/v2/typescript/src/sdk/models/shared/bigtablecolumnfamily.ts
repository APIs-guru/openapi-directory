import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigtableColumn } from "./bigtablecolumn";



export class BigtableColumnFamily extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns", elemType: BigtableColumn })
  columns?: BigtableColumn[];

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: string;

  @SpeakeasyMetadata({ data: "json, name=familyId" })
  familyId?: string;

  @SpeakeasyMetadata({ data: "json, name=onlyReadLatest" })
  onlyReadLatest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
