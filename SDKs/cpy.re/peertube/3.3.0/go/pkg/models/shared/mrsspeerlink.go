package shared

type MrssPeerLinkTypeEnum string

const (
	MrssPeerLinkTypeEnumApplicationXBittorrent MrssPeerLinkTypeEnum = "application/x-bittorrent"
)

type MrssPeerLink struct {
	Href *string
	Type *MrssPeerLinkTypeEnum
}
