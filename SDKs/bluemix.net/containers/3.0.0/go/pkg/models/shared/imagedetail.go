package shared

type ImageDetailConfig struct {
	ArgsEscaped  *bool    `json:"ArgsEscaped,omitempty"`
	AttachStderr *bool    `json:"AttachStderr,omitempty"`
	AttachStdin  *bool    `json:"AttachStdin,omitempty"`
	AttachStdout *bool    `json:"AttachStdout,omitempty"`
	Cmd          []string `json:"Cmd,omitempty"`
	Domainmame   *string  `json:"Domainmame,omitempty"`
	Entrypoint   *string  `json:"Entrypoint,omitempty"`
	Env          []string `json:"Env,omitempty"`
	ExposedPorts []string `json:"ExposedPorts,omitempty"`
	Hostname     *string  `json:"Hostname,omitempty"`
	Image        *string  `json:"Image,omitempty"`
	Labels       []string `json:"Labels,omitempty"`
	OnBuild      []string `json:"OnBuild,omitempty"`
	OpenStdin    *bool    `json:"OpenStdin,omitempty"`
	StdinOnce    *bool    `json:"StdinOnce,omitempty"`
	Tty          *bool    `json:"Tty,omitempty"`
	User         *string  `json:"User,omitempty"`
	Volumes      *string  `json:"Volumes,omitempty"`
	WorkingDir   *string  `json:"WorkingDir,omitempty"`
}

type ImageDetail struct {
	Architecture    *string            `json:"Architecture,omitempty"`
	Config          *ImageDetailConfig `json:"Config,omitempty"`
	Container       *string            `json:"Container,omitempty"`
	ContainerConfig *interface{}       `json:"ContainerConfig,omitempty"`
	Created         *string            `json:"Created,omitempty"`
	DockerVersion   *string            `json:"DockerVersion,omitempty"`
	ID              *string            `json:"Id,omitempty"`
	Os              *string            `json:"Os,omitempty"`
	Parent          *string            `json:"Parent,omitempty"`
	Size            *int32             `json:"Size,omitempty"`
	Tag             *string            `json:"Tag,omitempty"`
	Throwaway       *string            `json:"Throwaway,omitempty"`
	VirtualSize     *int32             `json:"VirtualSize,omitempty"`
}
