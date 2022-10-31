package shared

type BlockTypeEnum string

const (
	BlockTypeEnumKeyValueSet      BlockTypeEnum = "KEY_VALUE_SET"
	BlockTypeEnumPage             BlockTypeEnum = "PAGE"
	BlockTypeEnumLine             BlockTypeEnum = "LINE"
	BlockTypeEnumWord             BlockTypeEnum = "WORD"
	BlockTypeEnumTable            BlockTypeEnum = "TABLE"
	BlockTypeEnumCell             BlockTypeEnum = "CELL"
	BlockTypeEnumSelectionElement BlockTypeEnum = "SELECTION_ELEMENT"
)
