import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BigtableColumn } from "./bigtablecolumn";


export class BigtableColumnFamily extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns", elemType: shared.BigtableColumn })
  columns?: BigtableColumn[];

  @Metadata({ data: "json, name=encoding" })
  encoding?: string;

  @Metadata({ data: "json, name=familyId" })
  familyId?: string;

  @Metadata({ data: "json, name=onlyReadLatest" })
  onlyReadLatest?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
