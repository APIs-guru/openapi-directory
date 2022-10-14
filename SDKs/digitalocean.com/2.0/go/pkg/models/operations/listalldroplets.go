package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListAllDropletsQueryParams struct {
	Page    *int64  `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64  `queryParam:"style=form,explode=true,name=per_page"`
	TagName *string `queryParam:"style=form,explode=true,name=tag_name"`
}

type ListAllDropletsRequest struct {
	QueryParams ListAllDropletsQueryParams
}

type ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum string

const (
	ListAllDroplets200ApplicationJSONDropletsImageDistributionEnumArchLinux    ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum = "Arch Linux"
	ListAllDroplets200ApplicationJSONDropletsImageDistributionEnumCentOs       ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum = "CentOS"
	ListAllDroplets200ApplicationJSONDropletsImageDistributionEnumCoreOs       ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum = "CoreOS"
	ListAllDroplets200ApplicationJSONDropletsImageDistributionEnumDebian       ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum = "Debian"
	ListAllDroplets200ApplicationJSONDropletsImageDistributionEnumFedora       ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum = "Fedora"
	ListAllDroplets200ApplicationJSONDropletsImageDistributionEnumFedoraAtomic ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum = "Fedora Atomic"
	ListAllDroplets200ApplicationJSONDropletsImageDistributionEnumFreeBsd      ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum = "FreeBSD"
	ListAllDroplets200ApplicationJSONDropletsImageDistributionEnumGentoo       ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum = "Gentoo"
	ListAllDroplets200ApplicationJSONDropletsImageDistributionEnumOpenSuse     ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum = "openSUSE"
	ListAllDroplets200ApplicationJSONDropletsImageDistributionEnumRancherOs    ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum = "RancherOS"
	ListAllDroplets200ApplicationJSONDropletsImageDistributionEnumUbuntu       ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum = "Ubuntu"
	ListAllDroplets200ApplicationJSONDropletsImageDistributionEnumUnknown      ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum = "Unknown"
)

type ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum string

const (
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumAms1 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "ams1"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumAms2 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "ams2"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumAms3 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "ams3"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumBlr1 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "blr1"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumFra1 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "fra1"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumLon1 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "lon1"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumNyc1 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "nyc1"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumNyc2 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "nyc2"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumNyc3 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "nyc3"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumSfo1 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "sfo1"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumSfo2 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "sfo2"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumSfo3 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "sfo3"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumSgp1 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "sgp1"
	ListAllDroplets200ApplicationJSONDropletsImageRegionsEnumTor1 ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum = "tor1"
)

type ListAllDroplets200ApplicationJSONDropletsImageStatusEnum string

const (
	ListAllDroplets200ApplicationJSONDropletsImageStatusEnumNewUpper  ListAllDroplets200ApplicationJSONDropletsImageStatusEnum = "NEW"
	ListAllDroplets200ApplicationJSONDropletsImageStatusEnumNewLower  ListAllDroplets200ApplicationJSONDropletsImageStatusEnum = "new"
	ListAllDroplets200ApplicationJSONDropletsImageStatusEnumAvailable ListAllDroplets200ApplicationJSONDropletsImageStatusEnum = "available"
	ListAllDroplets200ApplicationJSONDropletsImageStatusEnumPending   ListAllDroplets200ApplicationJSONDropletsImageStatusEnum = "pending"
	ListAllDroplets200ApplicationJSONDropletsImageStatusEnumDeleted   ListAllDroplets200ApplicationJSONDropletsImageStatusEnum = "deleted"
	ListAllDroplets200ApplicationJSONDropletsImageStatusEnumRetired   ListAllDroplets200ApplicationJSONDropletsImageStatusEnum = "retired"
)

type ListAllDroplets200ApplicationJSONDropletsImageTypeEnum string

const (
	ListAllDroplets200ApplicationJSONDropletsImageTypeEnumBase     ListAllDroplets200ApplicationJSONDropletsImageTypeEnum = "base"
	ListAllDroplets200ApplicationJSONDropletsImageTypeEnumSnapshot ListAllDroplets200ApplicationJSONDropletsImageTypeEnum = "snapshot"
	ListAllDroplets200ApplicationJSONDropletsImageTypeEnumBackup   ListAllDroplets200ApplicationJSONDropletsImageTypeEnum = "backup"
	ListAllDroplets200ApplicationJSONDropletsImageTypeEnumCustom   ListAllDroplets200ApplicationJSONDropletsImageTypeEnum = "custom"
)

type ListAllDroplets200ApplicationJSONDropletsImage struct {
	CreatedAt     *time.Time                                                      `json:"created_at,omitempty"`
	Description   *string                                                         `json:"description,omitempty"`
	Distribution  *ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum `json:"distribution,omitempty"`
	ErrorMessage  *string                                                         `json:"error_message,omitempty"`
	ID            *int64                                                          `json:"id,omitempty"`
	MinDiskSize   *int64                                                          `json:"min_disk_size,omitempty"`
	Name          *string                                                         `json:"name,omitempty"`
	Public        *bool                                                           `json:"public,omitempty"`
	Regions       []ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum     `json:"regions,omitempty"`
	SizeGigabytes *float32                                                        `json:"size_gigabytes,omitempty"`
	Slug          *string                                                         `json:"slug,omitempty"`
	Status        *ListAllDroplets200ApplicationJSONDropletsImageStatusEnum       `json:"status,omitempty"`
	Tags          []string                                                        `json:"tags,omitempty"`
	Type          *ListAllDroplets200ApplicationJSONDropletsImageTypeEnum         `json:"type,omitempty"`
}

type ListAllDroplets200ApplicationJSONDropletsKernel struct {
	ID      *int64  `json:"id,omitempty"`
	Name    *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}

type ListAllDroplets200ApplicationJSONDropletsNetworksV4TypeEnum string

const (
	ListAllDroplets200ApplicationJSONDropletsNetworksV4TypeEnumPublic  ListAllDroplets200ApplicationJSONDropletsNetworksV4TypeEnum = "public"
	ListAllDroplets200ApplicationJSONDropletsNetworksV4TypeEnumPrivate ListAllDroplets200ApplicationJSONDropletsNetworksV4TypeEnum = "private"
)

type ListAllDroplets200ApplicationJSONDropletsNetworksV4 struct {
	Gateway   *string                                                      `json:"gateway,omitempty"`
	IPAddress *string                                                      `json:"ip_address,omitempty"`
	Netmask   *string                                                      `json:"netmask,omitempty"`
	Type      *ListAllDroplets200ApplicationJSONDropletsNetworksV4TypeEnum `json:"type,omitempty"`
}

type ListAllDroplets200ApplicationJSONDropletsNetworksV6TypeEnum string

const (
	ListAllDroplets200ApplicationJSONDropletsNetworksV6TypeEnumPublic ListAllDroplets200ApplicationJSONDropletsNetworksV6TypeEnum = "public"
)

type ListAllDroplets200ApplicationJSONDropletsNetworksV6 struct {
	Gateway   *string                                                      `json:"gateway,omitempty"`
	IPAddress *string                                                      `json:"ip_address,omitempty"`
	Netmask   *int64                                                       `json:"netmask,omitempty"`
	Type      *ListAllDroplets200ApplicationJSONDropletsNetworksV6TypeEnum `json:"type,omitempty"`
}

type ListAllDroplets200ApplicationJSONDropletsNetworks struct {
	V4 []ListAllDroplets200ApplicationJSONDropletsNetworksV4 `json:"v4,omitempty"`
	V6 []ListAllDroplets200ApplicationJSONDropletsNetworksV6 `json:"v6,omitempty"`
}

type ListAllDroplets200ApplicationJSONDropletsNextBackupWindow struct {
	End   *time.Time `json:"end,omitempty"`
	Start *time.Time `json:"start,omitempty"`
}

type ListAllDroplets200ApplicationJSONDropletsSize struct {
	Available    bool     `json:"available"`
	Description  string   `json:"description"`
	Disk         int64    `json:"disk"`
	Memory       int64    `json:"memory"`
	PriceHourly  float32  `json:"price_hourly"`
	PriceMonthly float32  `json:"price_monthly"`
	Regions      []string `json:"regions"`
	Slug         string   `json:"slug"`
	Transfer     float32  `json:"transfer"`
	Vcpus        int64    `json:"vcpus"`
}

type ListAllDroplets200ApplicationJSONDropletsStatusEnum string

const (
	ListAllDroplets200ApplicationJSONDropletsStatusEnumNew     ListAllDroplets200ApplicationJSONDropletsStatusEnum = "new"
	ListAllDroplets200ApplicationJSONDropletsStatusEnumActive  ListAllDroplets200ApplicationJSONDropletsStatusEnum = "active"
	ListAllDroplets200ApplicationJSONDropletsStatusEnumOff     ListAllDroplets200ApplicationJSONDropletsStatusEnum = "off"
	ListAllDroplets200ApplicationJSONDropletsStatusEnumArchive ListAllDroplets200ApplicationJSONDropletsStatusEnum = "archive"
)

type ListAllDroplets200ApplicationJSONDroplets struct {
	BackupIds        []int64                                                                                                      `json:"backup_ids"`
	CreatedAt        time.Time                                                                                                    `json:"created_at"`
	Disk             int64                                                                                                        `json:"disk"`
	Features         []string                                                                                                     `json:"features"`
	ID               int64                                                                                                        `json:"id"`
	Image            ListAllDroplets200ApplicationJSONDropletsImage                                                               `json:"image"`
	Kernel           ListAllDroplets200ApplicationJSONDropletsKernel                                                              `json:"kernel"`
	Locked           bool                                                                                                         `json:"locked"`
	Memory           int64                                                                                                        `json:"memory"`
	Name             string                                                                                                       `json:"name"`
	Networks         ListAllDroplets200ApplicationJSONDropletsNetworks                                                            `json:"networks"`
	NextBackupWindow ListAllDroplets200ApplicationJSONDropletsNextBackupWindow                                                    `json:"next_backup_window"`
	Region           shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion `json:"region"`
	Size             ListAllDroplets200ApplicationJSONDropletsSize                                                                `json:"size"`
	SizeSlug         string                                                                                                       `json:"size_slug"`
	SnapshotIds      []int64                                                                                                      `json:"snapshot_ids"`
	Status           ListAllDroplets200ApplicationJSONDropletsStatusEnum                                                          `json:"status"`
	Tags             []string                                                                                                     `json:"tags"`
	Vcpus            int64                                                                                                        `json:"vcpus"`
	VolumeIds        []string                                                                                                     `json:"volume_ids"`
	VpcUUID          *string                                                                                                      `json:"vpc_uuid,omitempty"`
}

type ListAllDroplets200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListAllDroplets200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListAllDroplets200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListAllDroplets200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllDroplets200ApplicationJSON struct {
	Droplets []ListAllDroplets200ApplicationJSONDroplets `json:"droplets,omitempty"`
	Links    *ListAllDroplets200ApplicationJSONLinks     `json:"links,omitempty"`
	Meta     ListAllDroplets200ApplicationJSONMeta       `json:"meta"`
}

type ListAllDroplets401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllDropletsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllDroplets200ApplicationJSONObject                   *ListAllDroplets200ApplicationJSON
	ListAllDroplets401ApplicationJSONObject                   *ListAllDroplets401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
